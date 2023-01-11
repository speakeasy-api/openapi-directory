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
exports.ImageOcrPhotoToTextResponse = exports.ImageOcrPhotoToTextRequest = exports.ImageOcrPhotoToTextSecurity = exports.ImageOcrPhotoToTextRequestBody = exports.ImageOcrPhotoToTextRequestBodyImageFile = exports.ImageOcrPhotoToTextHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImageOcrPhotoToTextHeaders = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoToTextHeaders, _super);
    function ImageOcrPhotoToTextHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoToTextHeaders.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=recognitionMode" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoToTextHeaders.prototype, "recognitionMode", void 0);
    return ImageOcrPhotoToTextHeaders;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoToTextHeaders = ImageOcrPhotoToTextHeaders;
var ImageOcrPhotoToTextRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoToTextRequestBodyImageFile, _super);
    function ImageOcrPhotoToTextRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoToTextRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoToTextRequestBodyImageFile.prototype, "imageFile", void 0);
    return ImageOcrPhotoToTextRequestBodyImageFile;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoToTextRequestBodyImageFile = ImageOcrPhotoToTextRequestBodyImageFile;
var ImageOcrPhotoToTextRequestBody = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoToTextRequestBody, _super);
    function ImageOcrPhotoToTextRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", ImageOcrPhotoToTextRequestBodyImageFile)
    ], ImageOcrPhotoToTextRequestBody.prototype, "imageFile", void 0);
    return ImageOcrPhotoToTextRequestBody;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoToTextRequestBody = ImageOcrPhotoToTextRequestBody;
var ImageOcrPhotoToTextSecurity = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoToTextSecurity, _super);
    function ImageOcrPhotoToTextSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ImageOcrPhotoToTextSecurity.prototype, "apikey", void 0);
    return ImageOcrPhotoToTextSecurity;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoToTextSecurity = ImageOcrPhotoToTextSecurity;
var ImageOcrPhotoToTextRequest = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoToTextRequest, _super);
    function ImageOcrPhotoToTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageOcrPhotoToTextHeaders)
    ], ImageOcrPhotoToTextRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImageOcrPhotoToTextRequestBody)
    ], ImageOcrPhotoToTextRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageOcrPhotoToTextSecurity)
    ], ImageOcrPhotoToTextRequest.prototype, "security", void 0);
    return ImageOcrPhotoToTextRequest;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoToTextRequest = ImageOcrPhotoToTextRequest;
var ImageOcrPhotoToTextResponse = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoToTextResponse, _super);
    function ImageOcrPhotoToTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoToTextResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImageOcrPhotoToTextResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImageToTextResponse)
    ], ImageOcrPhotoToTextResponse.prototype, "imageToTextResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImageOcrPhotoToTextResponse.prototype, "statusCode", void 0);
    return ImageOcrPhotoToTextResponse;
}(utils_1.SpeakeasyBase));
exports.ImageOcrPhotoToTextResponse = ImageOcrPhotoToTextResponse;
