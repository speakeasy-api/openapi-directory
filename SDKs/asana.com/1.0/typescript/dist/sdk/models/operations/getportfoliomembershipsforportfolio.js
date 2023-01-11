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
exports.GetPortfolioMembershipsForPortfolioResponse = exports.GetPortfolioMembershipsForPortfolioRequest = exports.GetPortfolioMembershipsForPortfolio200ApplicationJson = exports.GetPortfolioMembershipsForPortfolioQueryParams = exports.GetPortfolioMembershipsForPortfolioPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPortfolioMembershipsForPortfolioPathParams = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsForPortfolioPathParams, _super);
    function GetPortfolioMembershipsForPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsForPortfolioPathParams.prototype, "portfolioGid", void 0);
    return GetPortfolioMembershipsForPortfolioPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioMembershipsForPortfolioPathParams = GetPortfolioMembershipsForPortfolioPathParams;
var GetPortfolioMembershipsForPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsForPortfolioQueryParams, _super);
    function GetPortfolioMembershipsForPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetPortfolioMembershipsForPortfolioQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsForPortfolioQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetPortfolioMembershipsForPortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetPortfolioMembershipsForPortfolioQueryParams.prototype, "optPretty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsForPortfolioQueryParams.prototype, "user", void 0);
    return GetPortfolioMembershipsForPortfolioQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioMembershipsForPortfolioQueryParams = GetPortfolioMembershipsForPortfolioQueryParams;
var GetPortfolioMembershipsForPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsForPortfolio200ApplicationJson, _super);
    function GetPortfolioMembershipsForPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.PortfolioMembershipCompact }),
        __metadata("design:type", Array)
    ], GetPortfolioMembershipsForPortfolio200ApplicationJson.prototype, "data", void 0);
    return GetPortfolioMembershipsForPortfolio200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioMembershipsForPortfolio200ApplicationJson = GetPortfolioMembershipsForPortfolio200ApplicationJson;
var GetPortfolioMembershipsForPortfolioRequest = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsForPortfolioRequest, _super);
    function GetPortfolioMembershipsForPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioMembershipsForPortfolioPathParams)
    ], GetPortfolioMembershipsForPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioMembershipsForPortfolioQueryParams)
    ], GetPortfolioMembershipsForPortfolioRequest.prototype, "queryParams", void 0);
    return GetPortfolioMembershipsForPortfolioRequest;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioMembershipsForPortfolioRequest = GetPortfolioMembershipsForPortfolioRequest;
var GetPortfolioMembershipsForPortfolioResponse = /** @class */ (function (_super) {
    __extends(GetPortfolioMembershipsForPortfolioResponse, _super);
    function GetPortfolioMembershipsForPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPortfolioMembershipsForPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetPortfolioMembershipsForPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPortfolioMembershipsForPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPortfolioMembershipsForPortfolio200ApplicationJson)
    ], GetPortfolioMembershipsForPortfolioResponse.prototype, "getPortfolioMembershipsForPortfolio200ApplicationJSONObject", void 0);
    return GetPortfolioMembershipsForPortfolioResponse;
}(utils_1.SpeakeasyBase));
exports.GetPortfolioMembershipsForPortfolioResponse = GetPortfolioMembershipsForPortfolioResponse;
