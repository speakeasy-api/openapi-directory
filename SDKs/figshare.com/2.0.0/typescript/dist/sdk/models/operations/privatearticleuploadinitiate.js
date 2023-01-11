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
exports.PrivateArticleUploadInitiateResponse = exports.PrivateArticleUploadInitiateRequest = exports.PrivateArticleUploadInitiateSecurity = exports.PrivateArticleUploadInitiatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PrivateArticleUploadInitiatePathParams = /** @class */ (function (_super) {
    __extends(PrivateArticleUploadInitiatePathParams, _super);
    function PrivateArticleUploadInitiatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=article_id" }),
        __metadata("design:type", Number)
    ], PrivateArticleUploadInitiatePathParams.prototype, "articleId", void 0);
    return PrivateArticleUploadInitiatePathParams;
}(utils_1.SpeakeasyBase));
exports.PrivateArticleUploadInitiatePathParams = PrivateArticleUploadInitiatePathParams;
var PrivateArticleUploadInitiateSecurity = /** @class */ (function (_super) {
    __extends(PrivateArticleUploadInitiateSecurity, _super);
    function PrivateArticleUploadInitiateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PrivateArticleUploadInitiateSecurity.prototype, "oAuth2", void 0);
    return PrivateArticleUploadInitiateSecurity;
}(utils_1.SpeakeasyBase));
exports.PrivateArticleUploadInitiateSecurity = PrivateArticleUploadInitiateSecurity;
var PrivateArticleUploadInitiateRequest = /** @class */ (function (_super) {
    __extends(PrivateArticleUploadInitiateRequest, _super);
    function PrivateArticleUploadInitiateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PrivateArticleUploadInitiatePathParams)
    ], PrivateArticleUploadInitiateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FileCreator)
    ], PrivateArticleUploadInitiateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PrivateArticleUploadInitiateSecurity)
    ], PrivateArticleUploadInitiateRequest.prototype, "security", void 0);
    return PrivateArticleUploadInitiateRequest;
}(utils_1.SpeakeasyBase));
exports.PrivateArticleUploadInitiateRequest = PrivateArticleUploadInitiateRequest;
var PrivateArticleUploadInitiateResponse = /** @class */ (function (_super) {
    __extends(PrivateArticleUploadInitiateResponse, _super);
    function PrivateArticleUploadInitiateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PrivateArticleUploadInitiateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorMessage)
    ], PrivateArticleUploadInitiateResponse.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PrivateArticleUploadInitiateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Location)
    ], PrivateArticleUploadInitiateResponse.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PrivateArticleUploadInitiateResponse.prototype, "statusCode", void 0);
    return PrivateArticleUploadInitiateResponse;
}(utils_1.SpeakeasyBase));
exports.PrivateArticleUploadInitiateResponse = PrivateArticleUploadInitiateResponse;
