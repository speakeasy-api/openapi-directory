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
exports.CreateAlertPolicyResponse = exports.CreateAlertPolicyRequest = exports.CreateAlertPolicy401ApplicationJson = exports.CreateAlertPolicyRequestBody = exports.CreateAlertPolicyRequestBodyWindowEnum = exports.CreateAlertPolicyRequestBodyTypeEnum = exports.CreateAlertPolicyRequestBodyCompareEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateAlertPolicyRequestBodyCompareEnum;
(function (CreateAlertPolicyRequestBodyCompareEnum) {
    CreateAlertPolicyRequestBodyCompareEnum["GreaterThan"] = "GreaterThan";
    CreateAlertPolicyRequestBodyCompareEnum["LessThan"] = "LessThan";
})(CreateAlertPolicyRequestBodyCompareEnum = exports.CreateAlertPolicyRequestBodyCompareEnum || (exports.CreateAlertPolicyRequestBodyCompareEnum = {}));
var CreateAlertPolicyRequestBodyTypeEnum;
(function (CreateAlertPolicyRequestBodyTypeEnum) {
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletLoad1"] = "v1/insights/droplet/load_1";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletLoad5"] = "v1/insights/droplet/load_5";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletLoad15"] = "v1/insights/droplet/load_15";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletMemoryUtilizationPercent"] = "v1/insights/droplet/memory_utilization_percent";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletDiskUtilizationPercent"] = "v1/insights/droplet/disk_utilization_percent";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletCpu"] = "v1/insights/droplet/cpu";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletDiskRead"] = "v1/insights/droplet/disk_read";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletDiskWrite"] = "v1/insights/droplet/disk_write";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletPublicOutboundBandwidth"] = "v1/insights/droplet/public_outbound_bandwidth";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletPublicInboundBandwidth"] = "v1/insights/droplet/public_inbound_bandwidth";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletPrivateOutboundBandwidth"] = "v1/insights/droplet/private_outbound_bandwidth";
    CreateAlertPolicyRequestBodyTypeEnum["V1InsightsDropletPrivateInboundBandwidth"] = "v1/insights/droplet/private_inbound_bandwidth";
})(CreateAlertPolicyRequestBodyTypeEnum = exports.CreateAlertPolicyRequestBodyTypeEnum || (exports.CreateAlertPolicyRequestBodyTypeEnum = {}));
var CreateAlertPolicyRequestBodyWindowEnum;
(function (CreateAlertPolicyRequestBodyWindowEnum) {
    CreateAlertPolicyRequestBodyWindowEnum["Fivem"] = "5m";
    CreateAlertPolicyRequestBodyWindowEnum["Tenm"] = "10m";
    CreateAlertPolicyRequestBodyWindowEnum["Thirtym"] = "30m";
    CreateAlertPolicyRequestBodyWindowEnum["Oneh"] = "1h";
})(CreateAlertPolicyRequestBodyWindowEnum = exports.CreateAlertPolicyRequestBodyWindowEnum || (exports.CreateAlertPolicyRequestBodyWindowEnum = {}));
var CreateAlertPolicyRequestBody = /** @class */ (function (_super) {
    __extends(CreateAlertPolicyRequestBody, _super);
    function CreateAlertPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alerts" }),
        __metadata("design:type", shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts)
    ], CreateAlertPolicyRequestBody.prototype, "alerts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compare" }),
        __metadata("design:type", String)
    ], CreateAlertPolicyRequestBody.prototype, "compare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateAlertPolicyRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateAlertPolicyRequestBody.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entities" }),
        __metadata("design:type", Array)
    ], CreateAlertPolicyRequestBody.prototype, "entities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateAlertPolicyRequestBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateAlertPolicyRequestBody.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], CreateAlertPolicyRequestBody.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=window" }),
        __metadata("design:type", String)
    ], CreateAlertPolicyRequestBody.prototype, "window", void 0);
    return CreateAlertPolicyRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateAlertPolicyRequestBody = CreateAlertPolicyRequestBody;
var CreateAlertPolicy401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAlertPolicy401ApplicationJson, _super);
    function CreateAlertPolicy401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateAlertPolicy401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateAlertPolicy401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], CreateAlertPolicy401ApplicationJson.prototype, "requestId", void 0);
    return CreateAlertPolicy401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateAlertPolicy401ApplicationJson = CreateAlertPolicy401ApplicationJson;
var CreateAlertPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateAlertPolicyRequest, _super);
    function CreateAlertPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateAlertPolicyRequestBody)
    ], CreateAlertPolicyRequest.prototype, "request", void 0);
    return CreateAlertPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.CreateAlertPolicyRequest = CreateAlertPolicyRequest;
var CreateAlertPolicyResponse = /** @class */ (function (_super) {
    __extends(CreateAlertPolicyResponse, _super);
    function CreateAlertPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateAlertPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateAlertPolicyResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateAlertPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateAlertPolicy401ApplicationJson)
    ], CreateAlertPolicyResponse.prototype, "createAlertPolicy401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], CreateAlertPolicyResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems)
    ], CreateAlertPolicyResponse.prototype, "onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems", void 0);
    return CreateAlertPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.CreateAlertPolicyResponse = CreateAlertPolicyResponse;
