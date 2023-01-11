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
exports.HttpGatewayRouteMatch = void 0;
var utils_1 = require("../../../internal/utils");
var httpgatewayrouteheader_1 = require("./httpgatewayrouteheader");
var gatewayroutehostnamematch_1 = require("./gatewayroutehostnamematch");
var httpmethodenum_1 = require("./httpmethodenum");
var httppathmatch_1 = require("./httppathmatch");
var httpqueryparameter_1 = require("./httpqueryparameter");
// HttpGatewayRouteMatch
/**
 * An object that represents the criteria for determining a request match.
**/
var HttpGatewayRouteMatch = /** @class */ (function (_super) {
    __extends(HttpGatewayRouteMatch, _super);
    function HttpGatewayRouteMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=headers", elemType: httpgatewayrouteheader_1.HttpGatewayRouteHeader }),
        __metadata("design:type", Array)
    ], HttpGatewayRouteMatch.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hostname" }),
        __metadata("design:type", gatewayroutehostnamematch_1.GatewayRouteHostnameMatch)
    ], HttpGatewayRouteMatch.prototype, "hostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], HttpGatewayRouteMatch.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", httppathmatch_1.HttpPathMatch)
    ], HttpGatewayRouteMatch.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], HttpGatewayRouteMatch.prototype, "prefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryParameters", elemType: httpqueryparameter_1.HttpQueryParameter }),
        __metadata("design:type", Array)
    ], HttpGatewayRouteMatch.prototype, "queryParameters", void 0);
    return HttpGatewayRouteMatch;
}(utils_1.SpeakeasyBase));
exports.HttpGatewayRouteMatch = HttpGatewayRouteMatch;
