import { SpeakeasyBase } from "../../../internal/utils";
import { SuiteRunStatusEnum } from "./suiterunstatusenum";
/**
 * <p>Information about the suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p>
 */
export declare class SuiteRunInformation extends SpeakeasyBase {
    createdAt?: Date;
    endAt?: Date;
    failed?: number;
    passed?: number;
    startedAt?: Date;
    status?: SuiteRunStatusEnum;
    suiteDefinitionId?: string;
    suiteDefinitionName?: string;
    suiteDefinitionVersion?: string;
    suiteRunId?: string;
}
