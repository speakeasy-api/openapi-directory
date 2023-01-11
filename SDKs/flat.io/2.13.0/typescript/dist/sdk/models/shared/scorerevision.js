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
exports.ScoreRevision = void 0;
var utils_1 = require("../../../internal/utils");
var scorerevisionstatistics_1 = require("./scorerevisionstatistics");
// ScoreRevision
/**
 * A score revision metadata
**/
var ScoreRevision = /** @class */ (function (_super) {
    __extends(ScoreRevision, _super);
    function ScoreRevision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autosave" }),
        __metadata("design:type", Boolean)
    ], ScoreRevision.prototype, "autosave", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collaborators" }),
        __metadata("design:type", Array)
    ], ScoreRevision.prototype, "collaborators", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], ScoreRevision.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ScoreRevision.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], ScoreRevision.prototype, "event", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScoreRevision.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statistics" }),
        __metadata("design:type", scorerevisionstatistics_1.ScoreRevisionStatistics)
    ], ScoreRevision.prototype, "statistics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ScoreRevision.prototype, "user", void 0);
    return ScoreRevision;
}(utils_1.SpeakeasyBase));
exports.ScoreRevision = ScoreRevision;
