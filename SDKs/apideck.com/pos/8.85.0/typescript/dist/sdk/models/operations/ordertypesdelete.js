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
exports.OrderTypesDeleteResponse = exports.OrderTypesDeleteRequest = exports.OrderTypesDeleteSecurity = exports.OrderTypesDeleteHeaders = exports.OrderTypesDeleteQueryParams = exports.OrderTypesDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var OrderTypesDeletePathParams = /** @class */ (function (_super) {
    __extends(OrderTypesDeletePathParams, _super);
    function OrderTypesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], OrderTypesDeletePathParams.prototype, "id", void 0);
    return OrderTypesDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.OrderTypesDeletePathParams = OrderTypesDeletePathParams;
var OrderTypesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(OrderTypesDeleteQueryParams, _super);
    function OrderTypesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], OrderTypesDeleteQueryParams.prototype, "raw", void 0);
    return OrderTypesDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.OrderTypesDeleteQueryParams = OrderTypesDeleteQueryParams;
var OrderTypesDeleteHeaders = /** @class */ (function (_super) {
    __extends(OrderTypesDeleteHeaders, _super);
    function OrderTypesDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], OrderTypesDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], OrderTypesDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], OrderTypesDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return OrderTypesDeleteHeaders;
}(utils_1.SpeakeasyBase));
exports.OrderTypesDeleteHeaders = OrderTypesDeleteHeaders;
var OrderTypesDeleteSecurity = /** @class */ (function (_super) {
    __extends(OrderTypesDeleteSecurity, _super);
    function OrderTypesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OrderTypesDeleteSecurity.prototype, "apiKey", void 0);
    return OrderTypesDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.OrderTypesDeleteSecurity = OrderTypesDeleteSecurity;
var OrderTypesDeleteRequest = /** @class */ (function (_super) {
    __extends(OrderTypesDeleteRequest, _super);
    function OrderTypesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrderTypesDeletePathParams)
    ], OrderTypesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrderTypesDeleteQueryParams)
    ], OrderTypesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrderTypesDeleteHeaders)
    ], OrderTypesDeleteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OrderTypesDeleteSecurity)
    ], OrderTypesDeleteRequest.prototype, "security", void 0);
    return OrderTypesDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.OrderTypesDeleteRequest = OrderTypesDeleteRequest;
var OrderTypesDeleteResponse = /** @class */ (function (_super) {
    __extends(OrderTypesDeleteResponse, _super);
    function OrderTypesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], OrderTypesDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], OrderTypesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeleteOrderTypeResponse)
    ], OrderTypesDeleteResponse.prototype, "deleteOrderTypeResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], OrderTypesDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], OrderTypesDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], OrderTypesDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], OrderTypesDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], OrderTypesDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], OrderTypesDeleteResponse.prototype, "unprocessableResponse", void 0);
    return OrderTypesDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.OrderTypesDeleteResponse = OrderTypesDeleteResponse;
