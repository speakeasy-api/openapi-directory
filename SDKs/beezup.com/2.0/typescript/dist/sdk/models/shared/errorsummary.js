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
exports.ErrorSummary = void 0;
var utils_1 = require("../../../internal/utils");
var exceptiondetail_1 = require("./exceptiondetail");
var ErrorSummary = /** @class */ (function (_super) {
    __extends(ErrorSummary, _super);
    function ErrorSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorArguments" }),
        __metadata("design:type", Object)
    ], ErrorSummary.prototype, "errorArguments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorCode" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "errorCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorGuid" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "errorGuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exceptionDetail" }),
        __metadata("design:type", exceptiondetail_1.ExceptionDetail)
    ], ErrorSummary.prototype, "exceptionDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "objectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=propertyName" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "propertyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=propertyValue" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "propertyValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=technicalErrorMessage" }),
        __metadata("design:type", String)
    ], ErrorSummary.prototype, "technicalErrorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=utcDate" }),
        __metadata("design:type", Date)
    ], ErrorSummary.prototype, "utcDate", void 0);
    return ErrorSummary;
}(utils_1.SpeakeasyBase));
exports.ErrorSummary = ErrorSummary;
