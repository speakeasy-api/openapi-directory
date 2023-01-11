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
exports.ImageOcrPhotoRecognizeReceiptResponse = exports.ImageOcrPhotoRecognizeReceiptRequest = exports.ImageOcrPhotoRecognizeReceiptSecurity = exports.ImageOcrPhotoRecognizeReceiptRequestBody = exports.ImageOcrPhotoRecognizeReceiptRequestBodyImageFile = exports.ImageOcrPhotoRecognizeReceiptHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImageOcrPhotoRecognizeReceiptHeaders = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptHeaders, _super);
    function ImageOcrPhotoRecognizeReceiptHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptHeaders.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptHeaders.prototype, "preprocessing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=recognitionMode" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptHeaders.prototype, "recognitionMode", void 0);
    return ImageOcrPhotoRecognizeReceiptHeaders;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoRecognizeReceiptHeaders = ImageOcrPhotoRecognizeReceiptHeaders;
var ImageOcrPhotoRecognizeReceiptRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptRequestBodyImageFile, _super);
    function ImageOcrPhotoRecognizeReceiptRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoRecognizeReceiptRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptRequestBodyImageFile.prototype, "imageFile", void 0);
    return ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoRecognizeReceiptRequestBodyImageFile = ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
var ImageOcrPhotoRecognizeReceiptRequestBody = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptRequestBody, _super);
    function ImageOcrPhotoRecognizeReceiptRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptRequestBodyImageFile)
    ], ImageOcrPhotoRecognizeReceiptRequestBody.prototype, "imageFile", void 0);
    return ImageOcrPhotoRecognizeReceiptRequestBody;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoRecognizeReceiptRequestBody = ImageOcrPhotoRecognizeReceiptRequestBody;
var ImageOcrPhotoRecognizeReceiptSecurity = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptSecurity, _super);
    function ImageOcrPhotoRecognizeReceiptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ImageOcrPhotoRecognizeReceiptSecurity.prototype, "apikey", void 0);
    return ImageOcrPhotoRecognizeReceiptSecurity;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoRecognizeReceiptSecurity = ImageOcrPhotoRecognizeReceiptSecurity;
var ImageOcrPhotoRecognizeReceiptRequest = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptRequest, _super);
    function ImageOcrPhotoRecognizeReceiptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptHeaders)
    ], ImageOcrPhotoRecognizeReceiptRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptRequestBody)
    ], ImageOcrPhotoRecognizeReceiptRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptSecurity)
    ], ImageOcrPhotoRecognizeReceiptRequest.prototype, "security", void 0);
    return ImageOcrPhotoRecognizeReceiptRequest;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoRecognizeReceiptRequest = ImageOcrPhotoRecognizeReceiptRequest;
var ImageOcrPhotoRecognizeReceiptResponse = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptResponse, _super);
    function ImageOcrPhotoRecognizeReceiptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ReceiptRecognitionResult)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "receiptRecognitionResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "statusCode", void 0);
    return ImageOcrPhotoRecognizeReceiptResponse;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoRecognizeReceiptResponse = ImageOcrPhotoRecognizeReceiptResponse;
