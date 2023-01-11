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
exports.EmployeeSchedulesAllResponse = exports.EmployeeSchedulesAllRequest = exports.EmployeeSchedulesAllSecurity = exports.EmployeeSchedulesAllHeaders = exports.EmployeeSchedulesAllQueryParams = exports.EmployeeSchedulesAllPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EmployeeSchedulesAllPathParams = /** @class */ (function (_super) {
    __extends(EmployeeSchedulesAllPathParams, _super);
    function EmployeeSchedulesAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=employee_id" }),
        __metadata("design:type", String)
    ], EmployeeSchedulesAllPathParams.prototype, "employeeId", void 0);
    return EmployeeSchedulesAllPathParams;
}(utils_1.SpeakeasyBase));
exports.EmployeeSchedulesAllPathParams = EmployeeSchedulesAllPathParams;
var EmployeeSchedulesAllQueryParams = /** @class */ (function (_super) {
    __extends(EmployeeSchedulesAllQueryParams, _super);
    function EmployeeSchedulesAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], EmployeeSchedulesAllQueryParams.prototype, "raw", void 0);
    return EmployeeSchedulesAllQueryParams;
}(utils_1.SpeakeasyBase));
exports.EmployeeSchedulesAllQueryParams = EmployeeSchedulesAllQueryParams;
var EmployeeSchedulesAllHeaders = /** @class */ (function (_super) {
    __extends(EmployeeSchedulesAllHeaders, _super);
    function EmployeeSchedulesAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], EmployeeSchedulesAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], EmployeeSchedulesAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], EmployeeSchedulesAllHeaders.prototype, "xApideckServiceId", void 0);
    return EmployeeSchedulesAllHeaders;
}(utils_1.SpeakeasyBase));
exports.EmployeeSchedulesAllHeaders = EmployeeSchedulesAllHeaders;
var EmployeeSchedulesAllSecurity = /** @class */ (function (_super) {
    __extends(EmployeeSchedulesAllSecurity, _super);
    function EmployeeSchedulesAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EmployeeSchedulesAllSecurity.prototype, "apiKey", void 0);
    return EmployeeSchedulesAllSecurity;
}(utils_1.SpeakeasyBase));
exports.EmployeeSchedulesAllSecurity = EmployeeSchedulesAllSecurity;
var EmployeeSchedulesAllRequest = /** @class */ (function (_super) {
    __extends(EmployeeSchedulesAllRequest, _super);
    function EmployeeSchedulesAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeeSchedulesAllPathParams)
    ], EmployeeSchedulesAllRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeeSchedulesAllQueryParams)
    ], EmployeeSchedulesAllRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeeSchedulesAllHeaders)
    ], EmployeeSchedulesAllRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeeSchedulesAllSecurity)
    ], EmployeeSchedulesAllRequest.prototype, "security", void 0);
    return EmployeeSchedulesAllRequest;
}(utils_1.SpeakeasyBase));
exports.EmployeeSchedulesAllRequest = EmployeeSchedulesAllRequest;
var EmployeeSchedulesAllResponse = /** @class */ (function (_super) {
    __extends(EmployeeSchedulesAllResponse, _super);
    function EmployeeSchedulesAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], EmployeeSchedulesAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EmployeeSchedulesAllResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetEmployeeSchedulesResponse)
    ], EmployeeSchedulesAllResponse.prototype, "getEmployeeSchedulesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], EmployeeSchedulesAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], EmployeeSchedulesAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EmployeeSchedulesAllResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], EmployeeSchedulesAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], EmployeeSchedulesAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], EmployeeSchedulesAllResponse.prototype, "unprocessableResponse", void 0);
    return EmployeeSchedulesAllResponse;
}(utils_1.SpeakeasyBase));
exports.EmployeeSchedulesAllResponse = EmployeeSchedulesAllResponse;
