"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.DescribeClientVpnConnectionsRequest = exports.DescribeClientVpnConnectionsRequestFilters = void 0;
var utils_1 = require("../../../internal/utils");
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 */
var DescribeClientVpnConnectionsRequestFilters = /** @class */ (function (_super) {
    __extends(DescribeClientVpnConnectionsRequestFilters, _super);
    function DescribeClientVpnConnectionsRequestFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeClientVpnConnectionsRequestFilters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DescribeClientVpnConnectionsRequestFilters.prototype, "values", void 0);
    return DescribeClientVpnConnectionsRequestFilters;
}(utils_1.SpeakeasyBase));
exports.DescribeClientVpnConnectionsRequestFilters = DescribeClientVpnConnectionsRequestFilters;
var DescribeClientVpnConnectionsRequest = /** @class */ (function (_super) {
    __extends(DescribeClientVpnConnectionsRequest, _super);
    function DescribeClientVpnConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeClientVpnConnectionsRequest.prototype, "clientVpnEndpointId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DescribeClientVpnConnectionsRequest.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: DescribeClientVpnConnectionsRequestFilters }),
        __metadata("design:type", Array)
    ], DescribeClientVpnConnectionsRequest.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeClientVpnConnectionsRequest.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeClientVpnConnectionsRequest.prototype, "nextToken", void 0);
    return DescribeClientVpnConnectionsRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeClientVpnConnectionsRequest = DescribeClientVpnConnectionsRequest;
