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
exports.ModelResp = void 0;
var utils_1 = require("../../../internal/utils");
var modeldict_1 = require("./modeldict");
var ModelResp = /** @class */ (function (_super) {
    __extends(ModelResp, _super);
    function ModelResp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brandName" }),
        __metadata("design:type", String)
    ], ModelResp.prototype, "brandName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cacheTimeLimit" }),
        __metadata("design:type", Number)
    ], ModelResp.prototype, "cacheTimeLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], ModelResp.prototype, "condition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: modeldict_1.ModelDict }),
        __metadata("design:type", Array)
    ], ModelResp.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modelName" }),
        __metadata("design:type", String)
    ], ModelResp.prototype, "modelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=msg" }),
        __metadata("design:type", String)
    ], ModelResp.prototype, "msg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regionName" }),
        __metadata("design:type", String)
    ], ModelResp.prototype, "regionName", void 0);
    return ModelResp;
}(utils_1.SpeakeasyBase));
exports.ModelResp = ModelResp;
