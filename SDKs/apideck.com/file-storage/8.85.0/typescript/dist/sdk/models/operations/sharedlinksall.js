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
exports.SharedLinksAllResponseOutput = exports.SharedLinksAllRequest = exports.SharedLinksAllSecurity = exports.SharedLinksAllHeaders = exports.SharedLinksAllQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SharedLinksAllQueryParams = /** @class */ (function (_super) {
    __extends(SharedLinksAllQueryParams, _super);
    function SharedLinksAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], SharedLinksAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SharedLinksAllQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], SharedLinksAllQueryParams.prototype, "raw", void 0);
    return SharedLinksAllQueryParams;
}(utils_1.SpeakeasyBase));
exports.SharedLinksAllQueryParams = SharedLinksAllQueryParams;
var SharedLinksAllHeaders = /** @class */ (function (_super) {
    __extends(SharedLinksAllHeaders, _super);
    function SharedLinksAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], SharedLinksAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], SharedLinksAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], SharedLinksAllHeaders.prototype, "xApideckServiceId", void 0);
    return SharedLinksAllHeaders;
}(utils_1.SpeakeasyBase));
exports.SharedLinksAllHeaders = SharedLinksAllHeaders;
var SharedLinksAllSecurity = /** @class */ (function (_super) {
    __extends(SharedLinksAllSecurity, _super);
    function SharedLinksAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SharedLinksAllSecurity.prototype, "apiKey", void 0);
    return SharedLinksAllSecurity;
}(utils_1.SpeakeasyBase));
exports.SharedLinksAllSecurity = SharedLinksAllSecurity;
var SharedLinksAllRequest = /** @class */ (function (_super) {
    __extends(SharedLinksAllRequest, _super);
    function SharedLinksAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SharedLinksAllQueryParams)
    ], SharedLinksAllRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SharedLinksAllHeaders)
    ], SharedLinksAllRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SharedLinksAllSecurity)
    ], SharedLinksAllRequest.prototype, "security", void 0);
    return SharedLinksAllRequest;
}(utils_1.SpeakeasyBase));
exports.SharedLinksAllRequest = SharedLinksAllRequest;
var SharedLinksAllResponseOutput = /** @class */ (function (_super) {
    __extends(SharedLinksAllResponseOutput, _super);
    function SharedLinksAllResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], SharedLinksAllResponseOutput.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SharedLinksAllResponseOutput.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetSharedLinksResponseOutput)
    ], SharedLinksAllResponseOutput.prototype, "getSharedLinksResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], SharedLinksAllResponseOutput.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], SharedLinksAllResponseOutput.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SharedLinksAllResponseOutput.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], SharedLinksAllResponseOutput.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], SharedLinksAllResponseOutput.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], SharedLinksAllResponseOutput.prototype, "unprocessableResponse", void 0);
    return SharedLinksAllResponseOutput;
}(utils_1.SpeakeasyBase));
exports.SharedLinksAllResponseOutput = SharedLinksAllResponseOutput;
