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
exports.UploadSessionsUploadResponse = exports.UploadSessionsUploadRequest = exports.UploadSessionsUploadSecurity = exports.UploadSessionsUploadHeaders = exports.UploadSessionsUploadQueryParams = exports.UploadSessionsUploadPathParams = exports.UploadSessionsUploadServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UploadSessionsUploadServerList = [
    "https://upload.apideck.com",
];
var UploadSessionsUploadPathParams = /** @class */ (function (_super) {
    __extends(UploadSessionsUploadPathParams, _super);
    function UploadSessionsUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UploadSessionsUploadPathParams.prototype, "id", void 0);
    return UploadSessionsUploadPathParams;
}(utils_1.SpeakeasyBase));
exports.UploadSessionsUploadPathParams = UploadSessionsUploadPathParams;
var UploadSessionsUploadQueryParams = /** @class */ (function (_super) {
    __extends(UploadSessionsUploadQueryParams, _super);
    function UploadSessionsUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=part_number" }),
        __metadata("design:type", Number)
    ], UploadSessionsUploadQueryParams.prototype, "partNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], UploadSessionsUploadQueryParams.prototype, "raw", void 0);
    return UploadSessionsUploadQueryParams;
}(utils_1.SpeakeasyBase));
exports.UploadSessionsUploadQueryParams = UploadSessionsUploadQueryParams;
var UploadSessionsUploadHeaders = /** @class */ (function (_super) {
    __extends(UploadSessionsUploadHeaders, _super);
    function UploadSessionsUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=digest" }),
        __metadata("design:type", String)
    ], UploadSessionsUploadHeaders.prototype, "digest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], UploadSessionsUploadHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], UploadSessionsUploadHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], UploadSessionsUploadHeaders.prototype, "xApideckServiceId", void 0);
    return UploadSessionsUploadHeaders;
}(utils_1.SpeakeasyBase));
exports.UploadSessionsUploadHeaders = UploadSessionsUploadHeaders;
var UploadSessionsUploadSecurity = /** @class */ (function (_super) {
    __extends(UploadSessionsUploadSecurity, _super);
    function UploadSessionsUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UploadSessionsUploadSecurity.prototype, "apiKey", void 0);
    return UploadSessionsUploadSecurity;
}(utils_1.SpeakeasyBase));
exports.UploadSessionsUploadSecurity = UploadSessionsUploadSecurity;
var UploadSessionsUploadRequest = /** @class */ (function (_super) {
    __extends(UploadSessionsUploadRequest, _super);
    function UploadSessionsUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadSessionsUploadRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadSessionsUploadPathParams)
    ], UploadSessionsUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadSessionsUploadQueryParams)
    ], UploadSessionsUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadSessionsUploadHeaders)
    ], UploadSessionsUploadRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=*/*" }),
        __metadata("design:type", Uint8Array)
    ], UploadSessionsUploadRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadSessionsUploadSecurity)
    ], UploadSessionsUploadRequest.prototype, "security", void 0);
    return UploadSessionsUploadRequest;
}(utils_1.SpeakeasyBase));
exports.UploadSessionsUploadRequest = UploadSessionsUploadRequest;
var UploadSessionsUploadResponse = /** @class */ (function (_super) {
    __extends(UploadSessionsUploadResponse, _super);
    function UploadSessionsUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], UploadSessionsUploadResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadSessionsUploadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], UploadSessionsUploadResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], UploadSessionsUploadResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UploadSessionsUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], UploadSessionsUploadResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], UploadSessionsUploadResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], UploadSessionsUploadResponse.prototype, "unprocessableResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateUploadSessionResponse)
    ], UploadSessionsUploadResponse.prototype, "updateUploadSessionResponse", void 0);
    return UploadSessionsUploadResponse;
}(utils_1.SpeakeasyBase));
exports.UploadSessionsUploadResponse = UploadSessionsUploadResponse;
