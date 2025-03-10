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
exports.ItemsDeleteResponse = exports.ItemsDeleteRequest = exports.ItemsDeleteSecurity = exports.ItemsDeleteHeaders = exports.ItemsDeleteQueryParams = exports.ItemsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ItemsDeletePathParams = /** @class */ (function (_super) {
    __extends(ItemsDeletePathParams, _super);
    function ItemsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ItemsDeletePathParams.prototype, "id", void 0);
    return ItemsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.ItemsDeletePathParams = ItemsDeletePathParams;
var ItemsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ItemsDeleteQueryParams, _super);
    function ItemsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], ItemsDeleteQueryParams.prototype, "raw", void 0);
    return ItemsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.ItemsDeleteQueryParams = ItemsDeleteQueryParams;
var ItemsDeleteHeaders = /** @class */ (function (_super) {
    __extends(ItemsDeleteHeaders, _super);
    function ItemsDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], ItemsDeleteHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], ItemsDeleteHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], ItemsDeleteHeaders.prototype, "xApideckServiceId", void 0);
    return ItemsDeleteHeaders;
}(utils_1.SpeakeasyBase));
exports.ItemsDeleteHeaders = ItemsDeleteHeaders;
var ItemsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ItemsDeleteSecurity, _super);
    function ItemsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ItemsDeleteSecurity.prototype, "apiKey", void 0);
    return ItemsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.ItemsDeleteSecurity = ItemsDeleteSecurity;
var ItemsDeleteRequest = /** @class */ (function (_super) {
    __extends(ItemsDeleteRequest, _super);
    function ItemsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ItemsDeletePathParams)
    ], ItemsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ItemsDeleteQueryParams)
    ], ItemsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ItemsDeleteHeaders)
    ], ItemsDeleteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ItemsDeleteSecurity)
    ], ItemsDeleteRequest.prototype, "security", void 0);
    return ItemsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.ItemsDeleteRequest = ItemsDeleteRequest;
var ItemsDeleteResponse = /** @class */ (function (_super) {
    __extends(ItemsDeleteResponse, _super);
    function ItemsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], ItemsDeleteResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ItemsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeleteItemResponse)
    ], ItemsDeleteResponse.prototype, "deleteItemResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], ItemsDeleteResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], ItemsDeleteResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ItemsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], ItemsDeleteResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], ItemsDeleteResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], ItemsDeleteResponse.prototype, "unprocessableResponse", void 0);
    return ItemsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.ItemsDeleteResponse = ItemsDeleteResponse;
