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
exports.TimeOffRequestsAllResponse = exports.TimeOffRequestsAllRequest = exports.TimeOffRequestsAllSecurity = exports.TimeOffRequestsAllHeaders = exports.TimeOffRequestsAllQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TimeOffRequestsAllQueryParams = /** @class */ (function (_super) {
    __extends(TimeOffRequestsAllQueryParams, _super);
    function TimeOffRequestsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], TimeOffRequestsAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.TimeOffRequestsFilter)
    ], TimeOffRequestsAllQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TimeOffRequestsAllQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], TimeOffRequestsAllQueryParams.prototype, "raw", void 0);
    return TimeOffRequestsAllQueryParams;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsAllQueryParams = TimeOffRequestsAllQueryParams;
var TimeOffRequestsAllHeaders = /** @class */ (function (_super) {
    __extends(TimeOffRequestsAllHeaders, _super);
    function TimeOffRequestsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsAllHeaders.prototype, "xApideckServiceId", void 0);
    return TimeOffRequestsAllHeaders;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsAllHeaders = TimeOffRequestsAllHeaders;
var TimeOffRequestsAllSecurity = /** @class */ (function (_super) {
    __extends(TimeOffRequestsAllSecurity, _super);
    function TimeOffRequestsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TimeOffRequestsAllSecurity.prototype, "apiKey", void 0);
    return TimeOffRequestsAllSecurity;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsAllSecurity = TimeOffRequestsAllSecurity;
var TimeOffRequestsAllRequest = /** @class */ (function (_super) {
    __extends(TimeOffRequestsAllRequest, _super);
    function TimeOffRequestsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TimeOffRequestsAllQueryParams)
    ], TimeOffRequestsAllRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TimeOffRequestsAllHeaders)
    ], TimeOffRequestsAllRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TimeOffRequestsAllSecurity)
    ], TimeOffRequestsAllRequest.prototype, "security", void 0);
    return TimeOffRequestsAllRequest;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsAllRequest = TimeOffRequestsAllRequest;
var TimeOffRequestsAllResponse = /** @class */ (function (_super) {
    __extends(TimeOffRequestsAllResponse, _super);
    function TimeOffRequestsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], TimeOffRequestsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TimeOffRequestsAllResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetTimeOffRequestsResponse)
    ], TimeOffRequestsAllResponse.prototype, "getTimeOffRequestsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], TimeOffRequestsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], TimeOffRequestsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TimeOffRequestsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], TimeOffRequestsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], TimeOffRequestsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], TimeOffRequestsAllResponse.prototype, "unprocessableResponse", void 0);
    return TimeOffRequestsAllResponse;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsAllResponse = TimeOffRequestsAllResponse;
