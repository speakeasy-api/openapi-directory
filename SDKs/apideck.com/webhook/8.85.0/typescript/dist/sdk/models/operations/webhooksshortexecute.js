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
exports.WebhooksShortExecuteResponse = exports.WebhooksShortExecuteRequest = exports.WebhooksShortExecuteSecurity = exports.WebhooksShortExecuteQueryParams = exports.WebhooksShortExecutePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebhooksShortExecutePathParams = /** @class */ (function (_super) {
    __extends(WebhooksShortExecutePathParams, _super);
    function WebhooksShortExecutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], WebhooksShortExecutePathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", String)
    ], WebhooksShortExecutePathParams.prototype, "serviceId", void 0);
    return WebhooksShortExecutePathParams;
}(utils_1.SpeakeasyBase));
exports.WebhooksShortExecutePathParams = WebhooksShortExecutePathParams;
var WebhooksShortExecuteQueryParams = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteQueryParams, _super);
    function WebhooksShortExecuteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=e" }),
        __metadata("design:type", String)
    ], WebhooksShortExecuteQueryParams.prototype, "e", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=l_id" }),
        __metadata("design:type", String)
    ], WebhooksShortExecuteQueryParams.prototype, "lId", void 0);
    return WebhooksShortExecuteQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebhooksShortExecuteQueryParams = WebhooksShortExecuteQueryParams;
var WebhooksShortExecuteSecurity = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteSecurity, _super);
    function WebhooksShortExecuteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WebhooksShortExecuteSecurity.prototype, "apiKey", void 0);
    return WebhooksShortExecuteSecurity;
}(utils_1.SpeakeasyBase));
exports.WebhooksShortExecuteSecurity = WebhooksShortExecuteSecurity;
var WebhooksShortExecuteRequest = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteRequest, _super);
    function WebhooksShortExecuteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebhooksShortExecutePathParams)
    ], WebhooksShortExecuteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebhooksShortExecuteQueryParams)
    ], WebhooksShortExecuteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], WebhooksShortExecuteRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebhooksShortExecuteSecurity)
    ], WebhooksShortExecuteRequest.prototype, "security", void 0);
    return WebhooksShortExecuteRequest;
}(utils_1.SpeakeasyBase));
exports.WebhooksShortExecuteRequest = WebhooksShortExecuteRequest;
var WebhooksShortExecuteResponse = /** @class */ (function (_super) {
    __extends(WebhooksShortExecuteResponse, _super);
    function WebhooksShortExecuteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], WebhooksShortExecuteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebhooksShortExecuteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ExecuteWebhookResponse)
    ], WebhooksShortExecuteResponse.prototype, "executeWebhookResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], WebhooksShortExecuteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], WebhooksShortExecuteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebhooksShortExecuteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], WebhooksShortExecuteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], WebhooksShortExecuteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], WebhooksShortExecuteResponse.prototype, "unprocessableResponse", void 0);
    return WebhooksShortExecuteResponse;
}(utils_1.SpeakeasyBase));
exports.WebhooksShortExecuteResponse = WebhooksShortExecuteResponse;
