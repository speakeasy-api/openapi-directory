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
exports.GetItemFilesResponse = exports.GetItemFilesRequest = exports.GetItemFilesSecurity = exports.GetItemFilesQueryParams = exports.GetItemFilesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetItemFilesPathParams = /** @class */ (function (_super) {
    __extends(GetItemFilesPathParams, _super);
    function GetItemFilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=itemUuid" }),
        __metadata("design:type", String)
    ], GetItemFilesPathParams.prototype, "itemUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vaultUuid" }),
        __metadata("design:type", String)
    ], GetItemFilesPathParams.prototype, "vaultUuid", void 0);
    return GetItemFilesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetItemFilesPathParams = GetItemFilesPathParams;
var GetItemFilesQueryParams = /** @class */ (function (_super) {
    __extends(GetItemFilesQueryParams, _super);
    function GetItemFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=inline_files" }),
        __metadata("design:type", Boolean)
    ], GetItemFilesQueryParams.prototype, "inlineFiles", void 0);
    return GetItemFilesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetItemFilesQueryParams = GetItemFilesQueryParams;
var GetItemFilesSecurity = /** @class */ (function (_super) {
    __extends(GetItemFilesSecurity, _super);
    function GetItemFilesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeConnectToken)
    ], GetItemFilesSecurity.prototype, "connectToken", void 0);
    return GetItemFilesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetItemFilesSecurity = GetItemFilesSecurity;
var GetItemFilesRequest = /** @class */ (function (_super) {
    __extends(GetItemFilesRequest, _super);
    function GetItemFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetItemFilesPathParams)
    ], GetItemFilesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetItemFilesQueryParams)
    ], GetItemFilesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetItemFilesSecurity)
    ], GetItemFilesRequest.prototype, "security", void 0);
    return GetItemFilesRequest;
}(utils_1.SpeakeasyBase));
exports.GetItemFilesRequest = GetItemFilesRequest;
var GetItemFilesResponse = /** @class */ (function (_super) {
    __extends(GetItemFilesResponse, _super);
    function GetItemFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetItemFilesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetItemFilesResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.File }),
        __metadata("design:type", Array)
    ], GetItemFilesResponse.prototype, "files", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetItemFilesResponse.prototype, "statusCode", void 0);
    return GetItemFilesResponse;
}(utils_1.SpeakeasyBase));
exports.GetItemFilesResponse = GetItemFilesResponse;
