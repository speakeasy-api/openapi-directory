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
exports.TimeOffRequestsDeleteResponse = exports.TimeOffRequestsDeleteRequest = exports.TimeOffRequestsDeleteSecurity = exports.TimeOffRequestsDeleteHeaders = exports.TimeOffRequestsDeleteQueryParams = exports.TimeOffRequestsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TimeOffRequestsDeletePathParams = /** @class */ (function (_super) {
    __extends(TimeOffRequestsDeletePathParams, _super);
    function TimeOffRequestsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsDeletePathParams.prototype, "id", void 0);
    return TimeOffRequestsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsDeletePathParams = TimeOffRequestsDeletePathParams;
var TimeOffRequestsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(TimeOffRequestsDeleteQueryParams, _super);
    function TimeOffRequestsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], TimeOffRequestsDeleteQueryParams.prototype, "raw", void 0);
    return TimeOffRequestsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsDeleteQueryParams = TimeOffRequestsDeleteQueryParams;
var TimeOffRequestsDeleteHeaders = /** @class */ (function (_super) {
    __extends(TimeOffRequestsDeleteHeaders, _super);
    function TimeOffRequestsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], TimeOffRequestsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return TimeOffRequestsDeleteHeaders;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsDeleteHeaders = TimeOffRequestsDeleteHeaders;
var TimeOffRequestsDeleteSecurity = /** @class */ (function (_super) {
    __extends(TimeOffRequestsDeleteSecurity, _super);
    function TimeOffRequestsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TimeOffRequestsDeleteSecurity.prototype, "apiKey", void 0);
    return TimeOffRequestsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsDeleteSecurity = TimeOffRequestsDeleteSecurity;
var TimeOffRequestsDeleteRequest = /** @class */ (function (_super) {
    __extends(TimeOffRequestsDeleteRequest, _super);
    function TimeOffRequestsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TimeOffRequestsDeletePathParams)
    ], TimeOffRequestsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TimeOffRequestsDeleteQueryParams)
    ], TimeOffRequestsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TimeOffRequestsDeleteHeaders)
    ], TimeOffRequestsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TimeOffRequestsDeleteSecurity)
    ], TimeOffRequestsDeleteRequest.prototype, "security", void 0);
    return TimeOffRequestsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsDeleteRequest = TimeOffRequestsDeleteRequest;
var TimeOffRequestsDeleteResponse = /** @class */ (function (_super) {
    __extends(TimeOffRequestsDeleteResponse, _super);
    function TimeOffRequestsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], TimeOffRequestsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TimeOffRequestsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeleteTimeOffRequestResponse)
    ], TimeOffRequestsDeleteResponse.prototype, "deleteTimeOffRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], TimeOffRequestsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], TimeOffRequestsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TimeOffRequestsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], TimeOffRequestsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], TimeOffRequestsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], TimeOffRequestsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return TimeOffRequestsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.TimeOffRequestsDeleteResponse = TimeOffRequestsDeleteResponse;
