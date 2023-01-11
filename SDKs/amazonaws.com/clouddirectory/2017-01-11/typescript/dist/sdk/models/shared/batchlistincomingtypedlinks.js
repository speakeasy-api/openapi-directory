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
exports.BatchListIncomingTypedLinks = void 0;
var utils_1 = require("../../../internal/utils");
var typedlinkattributerange_1 = require("./typedlinkattributerange");
var typedlinkschemaandfacetname_1 = require("./typedlinkschemaandfacetname");
var objectreference_1 = require("./objectreference");
// BatchListIncomingTypedLinks
/**
 * Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
**/
var BatchListIncomingTypedLinks = /** @class */ (function (_super) {
    __extends(BatchListIncomingTypedLinks, _super);
    function BatchListIncomingTypedLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FilterAttributeRanges", elemType: typedlinkattributerange_1.TypedLinkAttributeRange }),
        __metadata("design:type", Array)
    ], BatchListIncomingTypedLinks.prototype, "filterAttributeRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FilterTypedLink" }),
        __metadata("design:type", typedlinkschemaandfacetname_1.TypedLinkSchemaAndFacetName)
    ], BatchListIncomingTypedLinks.prototype, "filterTypedLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], BatchListIncomingTypedLinks.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], BatchListIncomingTypedLinks.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ObjectReference" }),
        __metadata("design:type", objectreference_1.ObjectReference)
    ], BatchListIncomingTypedLinks.prototype, "objectReference", void 0);
    return BatchListIncomingTypedLinks;
}(utils_1.SpeakeasyBase));
exports.BatchListIncomingTypedLinks = BatchListIncomingTypedLinks;
