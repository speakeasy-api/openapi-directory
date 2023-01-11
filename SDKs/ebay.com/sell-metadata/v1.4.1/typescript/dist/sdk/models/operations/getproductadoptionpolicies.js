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
exports.GetProductAdoptionPoliciesResponse = exports.GetProductAdoptionPoliciesRequest = exports.GetProductAdoptionPoliciesSecurity = exports.GetProductAdoptionPoliciesQueryParams = exports.GetProductAdoptionPoliciesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetProductAdoptionPoliciesPathParams = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesPathParams, _super);
    function GetProductAdoptionPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=marketplace_id" }),
        __metadata("design:type", String)
    ], GetProductAdoptionPoliciesPathParams.prototype, "marketplaceId", void 0);
    return GetProductAdoptionPoliciesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetProductAdoptionPoliciesPathParams = GetProductAdoptionPoliciesPathParams;
var GetProductAdoptionPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesQueryParams, _super);
    function GetProductAdoptionPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetProductAdoptionPoliciesQueryParams.prototype, "filter", void 0);
    return GetProductAdoptionPoliciesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetProductAdoptionPoliciesQueryParams = GetProductAdoptionPoliciesQueryParams;
var GetProductAdoptionPoliciesSecurity = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesSecurity, _super);
    function GetProductAdoptionPoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetProductAdoptionPoliciesSecurity.prototype, "apiAuth", void 0);
    return GetProductAdoptionPoliciesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetProductAdoptionPoliciesSecurity = GetProductAdoptionPoliciesSecurity;
var GetProductAdoptionPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesRequest, _super);
    function GetProductAdoptionPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProductAdoptionPoliciesPathParams)
    ], GetProductAdoptionPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProductAdoptionPoliciesQueryParams)
    ], GetProductAdoptionPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProductAdoptionPoliciesSecurity)
    ], GetProductAdoptionPoliciesRequest.prototype, "security", void 0);
    return GetProductAdoptionPoliciesRequest;
}(utils_1.SpeakeasyBase));
exports.GetProductAdoptionPoliciesRequest = GetProductAdoptionPoliciesRequest;
var GetProductAdoptionPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetProductAdoptionPoliciesResponse, _super);
    function GetProductAdoptionPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetProductAdoptionPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProductAdoptionPolicyResponse)
    ], GetProductAdoptionPoliciesResponse.prototype, "productAdoptionPolicyResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetProductAdoptionPoliciesResponse.prototype, "statusCode", void 0);
    return GetProductAdoptionPoliciesResponse;
}(utils_1.SpeakeasyBase));
exports.GetProductAdoptionPoliciesResponse = GetProductAdoptionPoliciesResponse;
