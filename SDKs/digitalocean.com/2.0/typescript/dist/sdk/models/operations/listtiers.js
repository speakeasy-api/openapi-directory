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
exports.ListTiersResponse = exports.ListTiers401ApplicationJson = exports.ListTiers200ApplicationJson = exports.ListTiers200ApplicationJsonTiers = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListTiers200ApplicationJsonTiers = /** @class */ (function (_super) {
    __extends(ListTiers200ApplicationJsonTiers, _super);
    function ListTiers200ApplicationJsonTiers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_seconds" }),
        __metadata("design:type", String)
    ], ListTiers200ApplicationJsonTiers.prototype, "buildSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=egress_bandwidth_bytes" }),
        __metadata("design:type", String)
    ], ListTiers200ApplicationJsonTiers.prototype, "egressBandwidthBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListTiers200ApplicationJsonTiers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ListTiers200ApplicationJsonTiers.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storage_bytes" }),
        __metadata("design:type", String)
    ], ListTiers200ApplicationJsonTiers.prototype, "storageBytes", void 0);
    return ListTiers200ApplicationJsonTiers;
}(utils_1.SpeakeasyBase));
exports.ListTiers200ApplicationJsonTiers = ListTiers200ApplicationJsonTiers;
var ListTiers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListTiers200ApplicationJson, _super);
    function ListTiers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tiers", elemType: ListTiers200ApplicationJsonTiers }),
        __metadata("design:type", Array)
    ], ListTiers200ApplicationJson.prototype, "tiers", void 0);
    return ListTiers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListTiers200ApplicationJson = ListTiers200ApplicationJson;
var ListTiers401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListTiers401ApplicationJson, _super);
    function ListTiers401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListTiers401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListTiers401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListTiers401ApplicationJson.prototype, "requestId", void 0);
    return ListTiers401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListTiers401ApplicationJson = ListTiers401ApplicationJson;
var ListTiersResponse = /** @class */ (function (_super) {
    __extends(ListTiersResponse, _super);
    function ListTiersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTiersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListTiersResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListTiersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTiers200ApplicationJson)
    ], ListTiersResponse.prototype, "listTiers200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTiers401ApplicationJson)
    ], ListTiersResponse.prototype, "listTiers401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListTiersResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListTiersResponse;
}(utils_1.SpeakeasyBase));
exports.ListTiersResponse = ListTiersResponse;
