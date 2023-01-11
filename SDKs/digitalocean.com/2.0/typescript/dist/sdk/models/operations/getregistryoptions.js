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
exports.GetRegistryOptionsResponse = exports.GetRegistryOptions401ApplicationJson = exports.GetRegistryOptions200ApplicationJson = exports.GetRegistryOptions200ApplicationJsonOptions = exports.GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers = exports.GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum;
(function (GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum) {
    GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum["OverRepositoryLimit"] = "OverRepositoryLimit";
    GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum["OverStorageLimit"] = "OverStorageLimit";
})(GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum = exports.GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum || (exports.GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum = {}));
var GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers = /** @class */ (function (_super) {
    __extends(GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers, _super);
    function GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_storage_overage" }),
        __metadata("design:type", Boolean)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "allowStorageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eligibility_reasons" }),
        __metadata("design:type", Array)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "eligibilityReasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eligible" }),
        __metadata("design:type", Boolean)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "eligible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included_bandwidth_bytes" }),
        __metadata("design:type", Number)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "includedBandwidthBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included_repositories" }),
        __metadata("design:type", Number)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "includedRepositories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included_storage_bytes" }),
        __metadata("design:type", Number)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "includedStorageBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=monthly_price_in_cents" }),
        __metadata("design:type", Number)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "monthlyPriceInCents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers.prototype, "slug", void 0);
    return GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers;
}(utils_1.SpeakeasyBase));
exports.GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers = GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers;
var GetRegistryOptions200ApplicationJsonOptions = /** @class */ (function (_super) {
    __extends(GetRegistryOptions200ApplicationJsonOptions, _super);
    function GetRegistryOptions200ApplicationJsonOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription_tiers", elemType: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers }),
        __metadata("design:type", Array)
    ], GetRegistryOptions200ApplicationJsonOptions.prototype, "subscriptionTiers", void 0);
    return GetRegistryOptions200ApplicationJsonOptions;
}(utils_1.SpeakeasyBase));
exports.GetRegistryOptions200ApplicationJsonOptions = GetRegistryOptions200ApplicationJsonOptions;
var GetRegistryOptions200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRegistryOptions200ApplicationJson, _super);
    function GetRegistryOptions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", GetRegistryOptions200ApplicationJsonOptions)
    ], GetRegistryOptions200ApplicationJson.prototype, "options", void 0);
    return GetRegistryOptions200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRegistryOptions200ApplicationJson = GetRegistryOptions200ApplicationJson;
var GetRegistryOptions401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetRegistryOptions401ApplicationJson, _super);
    function GetRegistryOptions401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetRegistryOptions401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetRegistryOptions401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetRegistryOptions401ApplicationJson.prototype, "requestId", void 0);
    return GetRegistryOptions401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetRegistryOptions401ApplicationJson = GetRegistryOptions401ApplicationJson;
var GetRegistryOptionsResponse = /** @class */ (function (_super) {
    __extends(GetRegistryOptionsResponse, _super);
    function GetRegistryOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRegistryOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRegistryOptionsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRegistryOptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRegistryOptions200ApplicationJson)
    ], GetRegistryOptionsResponse.prototype, "getRegistryOptions200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRegistryOptions401ApplicationJson)
    ], GetRegistryOptionsResponse.prototype, "getRegistryOptions401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetRegistryOptionsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetRegistryOptionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetRegistryOptionsResponse = GetRegistryOptionsResponse;
