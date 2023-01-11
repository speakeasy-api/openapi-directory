"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAttachmentResponse = exports.GetAttachmentRequest = exports.GetAttachment200ApplicationJson = exports.GetAttachmentQueryParams = exports.GetAttachmentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAttachmentPathParams = /** @class */ (function (_super) {
    __extends(GetAttachmentPathParams, _super);
    function GetAttachmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=attachment_gid" }),
        __metadata("design:type", String)
    ], GetAttachmentPathParams.prototype, "attachmentGid", void 0);
    return GetAttachmentPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAttachmentPathParams = GetAttachmentPathParams;
var GetAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachmentQueryParams, _super);
    function GetAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetAttachmentQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetAttachmentQueryParams.prototype, "optPretty", void 0);
    return GetAttachmentQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAttachmentQueryParams = GetAttachmentQueryParams;
var GetAttachment200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttachment200ApplicationJson, _super);
    function GetAttachment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.AttachmentResponse)
    ], GetAttachment200ApplicationJson.prototype, "data", void 0);
    return GetAttachment200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAttachment200ApplicationJson = GetAttachment200ApplicationJson;
var GetAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetAttachmentRequest, _super);
    function GetAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttachmentPathParams)
    ], GetAttachmentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttachmentQueryParams)
    ], GetAttachmentRequest.prototype, "queryParams", void 0);
    return GetAttachmentRequest;
}(utils_1.SpeakeasyBase));
exports.GetAttachmentRequest = GetAttachmentRequest;
var GetAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetAttachmentResponse, _super);
    function GetAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetAttachmentResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAttachmentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAttachment200ApplicationJson)
    ], GetAttachmentResponse.prototype, "getAttachment200ApplicationJSONObject", void 0);
    return GetAttachmentResponse;
}(utils_1.SpeakeasyBase));
exports.GetAttachmentResponse = GetAttachmentResponse;
