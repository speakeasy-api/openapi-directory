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
exports.BatchAttachTypedLink = void 0;
var utils_1 = require("../../../internal/utils");
var attributenameandvalue_1 = require("./attributenameandvalue");
var objectreference_1 = require("./objectreference");
var typedlinkschemaandfacetname_1 = require("./typedlinkschemaandfacetname");
// BatchAttachTypedLink
/**
 * Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
**/
var BatchAttachTypedLink = /** @class */ (function (_super) {
    __extends(BatchAttachTypedLink, _super);
    function BatchAttachTypedLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes", elemType: attributenameandvalue_1.AttributeNameAndValue }),
        __metadata("design:type", Array)
    ], BatchAttachTypedLink.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SourceObjectReference" }),
        __metadata("design:type", objectreference_1.ObjectReference)
    ], BatchAttachTypedLink.prototype, "sourceObjectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TargetObjectReference" }),
        __metadata("design:type", objectreference_1.ObjectReference)
    ], BatchAttachTypedLink.prototype, "targetObjectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TypedLinkFacet" }),
        __metadata("design:type", typedlinkschemaandfacetname_1.TypedLinkSchemaAndFacetName)
    ], BatchAttachTypedLink.prototype, "typedLinkFacet", void 0);
    return BatchAttachTypedLink;
}(utils_1.SpeakeasyBase));
exports.BatchAttachTypedLink = BatchAttachTypedLink;
