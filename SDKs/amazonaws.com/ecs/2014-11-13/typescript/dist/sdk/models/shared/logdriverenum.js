"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogDriverEnum = void 0;
var LogDriverEnum;
(function (LogDriverEnum) {
    LogDriverEnum["JsonFile"] = "json-file";
    LogDriverEnum["Syslog"] = "syslog";
    LogDriverEnum["Journald"] = "journald";
    LogDriverEnum["Gelf"] = "gelf";
    LogDriverEnum["Fluentd"] = "fluentd";
    LogDriverEnum["Awslogs"] = "awslogs";
    LogDriverEnum["Splunk"] = "splunk";
    LogDriverEnum["Awsfirelens"] = "awsfirelens";
})(LogDriverEnum = exports.LogDriverEnum || (exports.LogDriverEnum = {}));
