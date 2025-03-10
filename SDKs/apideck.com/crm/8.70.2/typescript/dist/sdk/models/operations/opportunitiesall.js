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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var OpportunitiesAllQueryParams = /** @class */ (function (_super) {
    __extends(OpportunitiesAllQueryParams, _super);
    function OpportunitiesAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], OpportunitiesAllQueryParams.prototype, "cursor", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=filter" }),
        __metadata("design:type", shared.OpportunitiesFilter)
    ], OpportunitiesAllQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], OpportunitiesAllQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=raw" }),
        __metadata("design:type", Boolean)
    ], OpportunitiesAllQueryParams.prototype, "raw", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=deepObject;explode=true;name=sort" }),
        __metadata("design:type", shared.OpportunitiesSort)
    ], OpportunitiesAllQueryParams.prototype, "sort", void 0);
    return OpportunitiesAllQueryParams;
}(SpeakeasyBase));
export { OpportunitiesAllQueryParams };
var OpportunitiesAllHeaders = /** @class */ (function (_super) {
    __extends(OpportunitiesAllHeaders, _super);
    function OpportunitiesAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" }),
        __metadata("design:type", String)
    ], OpportunitiesAllHeaders.prototype, "xApideckAppId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" }),
        __metadata("design:type", String)
    ], OpportunitiesAllHeaders.prototype, "xApideckConsumerId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" }),
        __metadata("design:type", String)
    ], OpportunitiesAllHeaders.prototype, "xApideckServiceId", void 0);
    return OpportunitiesAllHeaders;
}(SpeakeasyBase));
export { OpportunitiesAllHeaders };
var OpportunitiesAllSecurity = /** @class */ (function (_super) {
    __extends(OpportunitiesAllSecurity, _super);
    function OpportunitiesAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OpportunitiesAllSecurity.prototype, "apiKey", void 0);
    return OpportunitiesAllSecurity;
}(SpeakeasyBase));
export { OpportunitiesAllSecurity };
var OpportunitiesAllRequest = /** @class */ (function (_super) {
    __extends(OpportunitiesAllRequest, _super);
    function OpportunitiesAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesAllQueryParams)
    ], OpportunitiesAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesAllHeaders)
    ], OpportunitiesAllRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OpportunitiesAllSecurity)
    ], OpportunitiesAllRequest.prototype, "security", void 0);
    return OpportunitiesAllRequest;
}(SpeakeasyBase));
export { OpportunitiesAllRequest };
var OpportunitiesAllResponse = /** @class */ (function (_super) {
    __extends(OpportunitiesAllResponse, _super);
    function OpportunitiesAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BadRequestResponse)
    ], OpportunitiesAllResponse.prototype, "badRequestResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OpportunitiesAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetOpportunitiesResponse)
    ], OpportunitiesAllResponse.prototype, "getOpportunitiesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFoundResponse)
    ], OpportunitiesAllResponse.prototype, "notFoundResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PaymentRequiredResponse)
    ], OpportunitiesAllResponse.prototype, "paymentRequiredResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OpportunitiesAllResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnauthorizedResponse)
    ], OpportunitiesAllResponse.prototype, "unauthorizedResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnexpectedErrorResponse)
    ], OpportunitiesAllResponse.prototype, "unexpectedErrorResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UnprocessableResponse)
    ], OpportunitiesAllResponse.prototype, "unprocessableResponse", void 0);
    return OpportunitiesAllResponse;
}(SpeakeasyBase));
export { OpportunitiesAllResponse };
