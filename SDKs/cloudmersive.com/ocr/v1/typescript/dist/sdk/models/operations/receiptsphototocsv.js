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
exports.ReceiptsPhotoToCsvResponse = exports.ReceiptsPhotoToCsvRequest = exports.ReceiptsPhotoToCsvSecurity = exports.ReceiptsPhotoToCsvRequestBody = exports.ReceiptsPhotoToCsvRequestBodyImageFile = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReceiptsPhotoToCsvRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvRequestBodyImageFile, _super);
    function ReceiptsPhotoToCsvRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ReceiptsPhotoToCsvRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ReceiptsPhotoToCsvRequestBodyImageFile.prototype, "imageFile", void 0);
    return ReceiptsPhotoToCsvRequestBodyImageFile;
}(utils_1.SpeakeasyBase));
exports.ReceiptsPhotoToCsvRequestBodyImageFile = ReceiptsPhotoToCsvRequestBodyImageFile;
var ReceiptsPhotoToCsvRequestBody = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvRequestBody, _super);
    function ReceiptsPhotoToCsvRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", ReceiptsPhotoToCsvRequestBodyImageFile)
    ], ReceiptsPhotoToCsvRequestBody.prototype, "imageFile", void 0);
    return ReceiptsPhotoToCsvRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReceiptsPhotoToCsvRequestBody = ReceiptsPhotoToCsvRequestBody;
var ReceiptsPhotoToCsvSecurity = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvSecurity, _super);
    function ReceiptsPhotoToCsvSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ReceiptsPhotoToCsvSecurity.prototype, "apikey", void 0);
    return ReceiptsPhotoToCsvSecurity;
}(utils_1.SpeakeasyBase));
exports.ReceiptsPhotoToCsvSecurity = ReceiptsPhotoToCsvSecurity;
var ReceiptsPhotoToCsvRequest = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvRequest, _super);
    function ReceiptsPhotoToCsvRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ReceiptsPhotoToCsvRequestBody)
    ], ReceiptsPhotoToCsvRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReceiptsPhotoToCsvSecurity)
    ], ReceiptsPhotoToCsvRequest.prototype, "security", void 0);
    return ReceiptsPhotoToCsvRequest;
}(utils_1.SpeakeasyBase));
exports.ReceiptsPhotoToCsvRequest = ReceiptsPhotoToCsvRequest;
var ReceiptsPhotoToCsvResponse = /** @class */ (function (_super) {
    __extends(ReceiptsPhotoToCsvResponse, _super);
    function ReceiptsPhotoToCsvResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ReceiptsPhotoToCsvResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReceiptsPhotoToCsvResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReceiptsPhotoToCsvResponse.prototype, "receiptsPhotoToCSV200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReceiptsPhotoToCsvResponse.prototype, "receiptsPhotoToCSV200TextJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReceiptsPhotoToCsvResponse.prototype, "statusCode", void 0);
    return ReceiptsPhotoToCsvResponse;
}(utils_1.SpeakeasyBase));
exports.ReceiptsPhotoToCsvResponse = ReceiptsPhotoToCsvResponse;
