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
exports.EmployeePayrollsAllResponse = exports.EmployeePayrollsAllRequest = exports.EmployeePayrollsAllSecurity = exports.EmployeePayrollsAllHeaders = exports.EmployeePayrollsAllQueryParams = exports.EmployeePayrollsAllPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EmployeePayrollsAllPathParams = /** @class */ (function (_super) {
    __extends(EmployeePayrollsAllPathParams, _super);
    function EmployeePayrollsAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=employee_id" }),
        __metadata("design:type", String)
    ], EmployeePayrollsAllPathParams.prototype, "employeeId", void 0);
    return EmployeePayrollsAllPathParams;
}(utils_1.SpeakeasyBase));
exports.EmployeePayrollsAllPathParams = EmployeePayrollsAllPathParams;
var EmployeePayrollsAllQueryParams = /** @class */ (function (_super) {
    __extends(EmployeePayrollsAllQueryParams, _super);
    function EmployeePayrollsAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.PayrollsFilter)
    ], EmployeePayrollsAllQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], EmployeePayrollsAllQueryParams.prototype, "raw", void 0);
    return EmployeePayrollsAllQueryParams;
}(utils_1.SpeakeasyBase));
exports.EmployeePayrollsAllQueryParams = EmployeePayrollsAllQueryParams;
var EmployeePayrollsAllHeaders = /** @class */ (function (_super) {
    __extends(EmployeePayrollsAllHeaders, _super);
    function EmployeePayrollsAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], EmployeePayrollsAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], EmployeePayrollsAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], EmployeePayrollsAllHeaders.prototype, "xApideckServiceId", void 0);
    return EmployeePayrollsAllHeaders;
}(utils_1.SpeakeasyBase));
exports.EmployeePayrollsAllHeaders = EmployeePayrollsAllHeaders;
var EmployeePayrollsAllSecurity = /** @class */ (function (_super) {
    __extends(EmployeePayrollsAllSecurity, _super);
    function EmployeePayrollsAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EmployeePayrollsAllSecurity.prototype, "apiKey", void 0);
    return EmployeePayrollsAllSecurity;
}(utils_1.SpeakeasyBase));
exports.EmployeePayrollsAllSecurity = EmployeePayrollsAllSecurity;
var EmployeePayrollsAllRequest = /** @class */ (function (_super) {
    __extends(EmployeePayrollsAllRequest, _super);
    function EmployeePayrollsAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeePayrollsAllPathParams)
    ], EmployeePayrollsAllRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeePayrollsAllQueryParams)
    ], EmployeePayrollsAllRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeePayrollsAllHeaders)
    ], EmployeePayrollsAllRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EmployeePayrollsAllSecurity)
    ], EmployeePayrollsAllRequest.prototype, "security", void 0);
    return EmployeePayrollsAllRequest;
}(utils_1.SpeakeasyBase));
exports.EmployeePayrollsAllRequest = EmployeePayrollsAllRequest;
var EmployeePayrollsAllResponse = /** @class */ (function (_super) {
    __extends(EmployeePayrollsAllResponse, _super);
    function EmployeePayrollsAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BadRequestResponse)
    ], EmployeePayrollsAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EmployeePayrollsAllResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetEmployeePayrollsResponse)
    ], EmployeePayrollsAllResponse.prototype, "getEmployeePayrollsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.NotFoundResponse)
    ], EmployeePayrollsAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], EmployeePayrollsAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EmployeePayrollsAllResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], EmployeePayrollsAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], EmployeePayrollsAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], EmployeePayrollsAllResponse.prototype, "unprocessableResponse", void 0);
    return EmployeePayrollsAllResponse;
}(utils_1.SpeakeasyBase));
exports.EmployeePayrollsAllResponse = EmployeePayrollsAllResponse;
