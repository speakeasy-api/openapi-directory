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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema = exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum = exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum = void 0;
var utils_1 = require("../../../internal/utils");
var onev21monitoring1alertsgetresponses200contentapplication1jsonschemaallof0propertiespoliciesitemspropertiesalerts_1 = require("./onev21monitoring1alertsgetresponses200contentapplication1jsonschemaallof0propertiespoliciesitemspropertiesalerts");
var Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum;
(function (Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum) {
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum["GreaterThan"] = "GreaterThan";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum["LessThan"] = "LessThan";
})(Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum = exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum || (exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaCompareEnum = {}));
var Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum;
(function (Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum) {
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletLoad1"] = "v1/insights/droplet/load_1";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletLoad5"] = "v1/insights/droplet/load_5";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletLoad15"] = "v1/insights/droplet/load_15";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletMemoryUtilizationPercent"] = "v1/insights/droplet/memory_utilization_percent";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletDiskUtilizationPercent"] = "v1/insights/droplet/disk_utilization_percent";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletCpu"] = "v1/insights/droplet/cpu";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletDiskRead"] = "v1/insights/droplet/disk_read";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletDiskWrite"] = "v1/insights/droplet/disk_write";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletPublicOutboundBandwidth"] = "v1/insights/droplet/public_outbound_bandwidth";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletPublicInboundBandwidth"] = "v1/insights/droplet/public_inbound_bandwidth";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletPrivateOutboundBandwidth"] = "v1/insights/droplet/private_outbound_bandwidth";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum["V1InsightsDropletPrivateInboundBandwidth"] = "v1/insights/droplet/private_inbound_bandwidth";
})(Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum || (exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaTypeEnum = {}));
var Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum;
(function (Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum) {
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum["Fivem"] = "5m";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum["Tenm"] = "10m";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum["Thirtym"] = "30m";
    Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum["Oneh"] = "1h";
})(Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum = exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum || (exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchemaWindowEnum = {}));
var Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema, _super);
    function Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alerts" }),
        __metadata("design:type", onev21monitoring1alertsgetresponses200contentapplication1jsonschemaallof0propertiespoliciesitemspropertiesalerts_1.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "alerts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compare" }),
        __metadata("design:type", String)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "compare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entities" }),
        __metadata("design:type", Array)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "entities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=window" }),
        __metadata("design:type", String)
    ], Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema.prototype, "window", void 0);
    return Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema;
}(utils_1.SpeakeasyBase));
exports.Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema = Onev21monitoring1alertsPostRequestBodyContentApplication1jsonSchema;
