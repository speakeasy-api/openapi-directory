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
exports.ExclusionPreview = void 0;
var utils_1 = require("../../../internal/utils");
var attribute_1 = require("./attribute");
var scope_1 = require("./scope");
// ExclusionPreview
/**
 * Contains information about what is excluded from an assessment run given the current state of the assessment template.
**/
var ExclusionPreview = /** @class */ (function (_super) {
    __extends(ExclusionPreview, _super);
    function ExclusionPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes", elemType: attribute_1.Attribute }),
        __metadata("design:type", Array)
    ], ExclusionPreview.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ExclusionPreview.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendation" }),
        __metadata("design:type", String)
    ], ExclusionPreview.prototype, "recommendation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scopes", elemType: scope_1.Scope }),
        __metadata("design:type", Array)
    ], ExclusionPreview.prototype, "scopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ExclusionPreview.prototype, "title", void 0);
    return ExclusionPreview;
}(utils_1.SpeakeasyBase));
exports.ExclusionPreview = ExclusionPreview;
