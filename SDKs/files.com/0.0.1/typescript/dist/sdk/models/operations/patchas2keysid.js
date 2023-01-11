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
exports.PatchAs2KeysIdResponse = exports.PatchAs2KeysIdRequest = exports.PatchAs2KeysIdRequestBody = exports.PatchAs2KeysIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatchAs2KeysIdPathParams = /** @class */ (function (_super) {
    __extends(PatchAs2KeysIdPathParams, _super);
    function PatchAs2KeysIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchAs2KeysIdPathParams.prototype, "id", void 0);
    return PatchAs2KeysIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchAs2KeysIdPathParams = PatchAs2KeysIdPathParams;
var PatchAs2KeysIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchAs2KeysIdRequestBody, _super);
    function PatchAs2KeysIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=as2_partnership_name" }),
        __metadata("design:type", String)
    ], PatchAs2KeysIdRequestBody.prototype, "as2PartnershipName", void 0);
    return PatchAs2KeysIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchAs2KeysIdRequestBody = PatchAs2KeysIdRequestBody;
var PatchAs2KeysIdRequest = /** @class */ (function (_super) {
    __extends(PatchAs2KeysIdRequest, _super);
    function PatchAs2KeysIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchAs2KeysIdPathParams)
    ], PatchAs2KeysIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchAs2KeysIdRequestBody)
    ], PatchAs2KeysIdRequest.prototype, "request", void 0);
    return PatchAs2KeysIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchAs2KeysIdRequest = PatchAs2KeysIdRequest;
var PatchAs2KeysIdResponse = /** @class */ (function (_super) {
    __extends(PatchAs2KeysIdResponse, _super);
    function PatchAs2KeysIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.As2KeyEntity)
    ], PatchAs2KeysIdResponse.prototype, "as2KeyEntity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchAs2KeysIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchAs2KeysIdResponse.prototype, "statusCode", void 0);
    return PatchAs2KeysIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchAs2KeysIdResponse = PatchAs2KeysIdResponse;
