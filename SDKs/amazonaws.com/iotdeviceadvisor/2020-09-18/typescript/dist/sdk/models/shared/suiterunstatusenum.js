"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiteRunStatusEnum = void 0;
var SuiteRunStatusEnum;
(function (SuiteRunStatusEnum) {
    SuiteRunStatusEnum["Pass"] = "PASS";
    SuiteRunStatusEnum["Fail"] = "FAIL";
    SuiteRunStatusEnum["Canceled"] = "CANCELED";
    SuiteRunStatusEnum["Pending"] = "PENDING";
    SuiteRunStatusEnum["Running"] = "RUNNING";
    SuiteRunStatusEnum["Stopping"] = "STOPPING";
    SuiteRunStatusEnum["Stopped"] = "STOPPED";
    SuiteRunStatusEnum["PassWithWarnings"] = "PASS_WITH_WARNINGS";
    SuiteRunStatusEnum["Error"] = "ERROR";
})(SuiteRunStatusEnum = exports.SuiteRunStatusEnum || (exports.SuiteRunStatusEnum = {}));
