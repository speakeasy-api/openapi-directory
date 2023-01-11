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
exports.AppD = void 0;
var utils_1 = require("../../../internal/utils");
var dnsruledescriptor_1 = require("./dnsruledescriptor");
var appexternalcpd_1 = require("./appexternalcpd");
var featuredependency_1 = require("./featuredependency");
var latencydescriptor_1 = require("./latencydescriptor");
var servicedependency_1 = require("./servicedependency");
var servicedescriptor_1 = require("./servicedescriptor");
var trafficruledescriptor_1 = require("./trafficruledescriptor");
var transportdependency_1 = require("./transportdependency");
var AppD = /** @class */ (function (_super) {
    __extends(AppD, _super);
    function AppD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "appDId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dnsruledescriptor_1.DnsRuleDescriptor }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appDNSRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "appDVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "appDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: appexternalcpd_1.AppExternalCpd }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appExtCpd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: featuredependency_1.FeatureDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appFeatureOptional", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: featuredependency_1.FeatureDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appFeatureRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "appInfoName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", latencydescriptor_1.LatencyDescriptor)
    ], AppD.prototype, "appLatency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "appName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "appProvider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: servicedependency_1.ServiceDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appServiceOptional", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: servicedescriptor_1.ServiceDescriptor }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appServiceProduced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: servicedependency_1.ServiceDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appServiceRequired", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "appSoftVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: trafficruledescriptor_1.TrafficRuleDescriptor }),
        __metadata("design:type", Array)
    ], AppD.prototype, "appTrafficRule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "changeAppInstanceStateOpConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], AppD.prototype, "mecVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "swImageDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "terminateAppInstanceOpConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: transportdependency_1.TransportDependency }),
        __metadata("design:type", Array)
    ], AppD.prototype, "transportDependencies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppD.prototype, "virtualComputeDescriptor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], AppD.prototype, "virtualStorageDescriptor", void 0);
    return AppD;
}(utils_1.SpeakeasyBase));
exports.AppD = AppD;
