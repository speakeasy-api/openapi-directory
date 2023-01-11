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
exports.AddMembersForPortfolioResponse = exports.AddMembersForPortfolioRequest = exports.AddMembersForPortfolio200ApplicationJson = exports.AddMembersForPortfolioRequestBody = exports.AddMembersForPortfolioQueryParams = exports.AddMembersForPortfolioPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddMembersForPortfolioPathParams = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioPathParams, _super);
    function AddMembersForPortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], AddMembersForPortfolioPathParams.prototype, "portfolioGid", void 0);
    return AddMembersForPortfolioPathParams;
}(utils_1.SpeakeasyBase));
exports.AddMembersForPortfolioPathParams = AddMembersForPortfolioPathParams;
var AddMembersForPortfolioQueryParams = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioQueryParams, _super);
    function AddMembersForPortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddMembersForPortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddMembersForPortfolioQueryParams.prototype, "optPretty", void 0);
    return AddMembersForPortfolioQueryParams;
}(utils_1.SpeakeasyBase));
exports.AddMembersForPortfolioQueryParams = AddMembersForPortfolioQueryParams;
var AddMembersForPortfolioRequestBody = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioRequestBody, _super);
    function AddMembersForPortfolioRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.AddMembersRequest)
    ], AddMembersForPortfolioRequestBody.prototype, "data", void 0);
    return AddMembersForPortfolioRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddMembersForPortfolioRequestBody = AddMembersForPortfolioRequestBody;
var AddMembersForPortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolio200ApplicationJson, _super);
    function AddMembersForPortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], AddMembersForPortfolio200ApplicationJson.prototype, "data", void 0);
    return AddMembersForPortfolio200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddMembersForPortfolio200ApplicationJson = AddMembersForPortfolio200ApplicationJson;
var AddMembersForPortfolioRequest = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioRequest, _super);
    function AddMembersForPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersForPortfolioPathParams)
    ], AddMembersForPortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersForPortfolioQueryParams)
    ], AddMembersForPortfolioRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddMembersForPortfolioRequestBody)
    ], AddMembersForPortfolioRequest.prototype, "request", void 0);
    return AddMembersForPortfolioRequest;
}(utils_1.SpeakeasyBase));
exports.AddMembersForPortfolioRequest = AddMembersForPortfolioRequest;
var AddMembersForPortfolioResponse = /** @class */ (function (_super) {
    __extends(AddMembersForPortfolioResponse, _super);
    function AddMembersForPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddMembersForPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddMembersForPortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddMembersForPortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddMembersForPortfolio200ApplicationJson)
    ], AddMembersForPortfolioResponse.prototype, "addMembersForPortfolio200ApplicationJSONObject", void 0);
    return AddMembersForPortfolioResponse;
}(utils_1.SpeakeasyBase));
exports.AddMembersForPortfolioResponse = AddMembersForPortfolioResponse;
