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
exports.UpdatePortfolioResponse = exports.UpdatePortfolioRequest = exports.UpdatePortfolio200ApplicationJson = exports.UpdatePortfolioRequestBodyInput = exports.UpdatePortfolioQueryParams = exports.UpdatePortfolioPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePortfolioPathParams = /** @class */ (function (_super) {
    __extends(UpdatePortfolioPathParams, _super);
    function UpdatePortfolioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" }),
        __metadata("design:type", String)
    ], UpdatePortfolioPathParams.prototype, "portfolioGid", void 0);
    return UpdatePortfolioPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioPathParams = UpdatePortfolioPathParams;
var UpdatePortfolioQueryParams = /** @class */ (function (_super) {
    __extends(UpdatePortfolioQueryParams, _super);
    function UpdatePortfolioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdatePortfolioQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdatePortfolioQueryParams.prototype, "optPretty", void 0);
    return UpdatePortfolioQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioQueryParams = UpdatePortfolioQueryParams;
var UpdatePortfolioRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdatePortfolioRequestBodyInput, _super);
    function UpdatePortfolioRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.PortfolioRequestInput)
    ], UpdatePortfolioRequestBodyInput.prototype, "data", void 0);
    return UpdatePortfolioRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioRequestBodyInput = UpdatePortfolioRequestBodyInput;
var UpdatePortfolio200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePortfolio200ApplicationJson, _super);
    function UpdatePortfolio200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.PortfolioResponse)
    ], UpdatePortfolio200ApplicationJson.prototype, "data", void 0);
    return UpdatePortfolio200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolio200ApplicationJson = UpdatePortfolio200ApplicationJson;
var UpdatePortfolioRequest = /** @class */ (function (_super) {
    __extends(UpdatePortfolioRequest, _super);
    function UpdatePortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortfolioPathParams)
    ], UpdatePortfolioRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortfolioQueryParams)
    ], UpdatePortfolioRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePortfolioRequestBodyInput)
    ], UpdatePortfolioRequest.prototype, "request", void 0);
    return UpdatePortfolioRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioRequest = UpdatePortfolioRequest;
var UpdatePortfolioResponse = /** @class */ (function (_super) {
    __extends(UpdatePortfolioResponse, _super);
    function UpdatePortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdatePortfolioResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePortfolioResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePortfolio200ApplicationJson)
    ], UpdatePortfolioResponse.prototype, "updatePortfolio200ApplicationJSONObject", void 0);
    return UpdatePortfolioResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePortfolioResponse = UpdatePortfolioResponse;
