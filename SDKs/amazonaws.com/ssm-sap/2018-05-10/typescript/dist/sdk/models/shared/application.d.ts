import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { ApplicationTypeEnum } from "./applicationtypeenum";
/**
 * An SAP application registered with AWS Systems Manager for SAP.
 */
export declare class Application extends SpeakeasyBase {
    appRegistryArn?: string;
    arn?: string;
    components?: string[];
    id?: string;
    lastUpdated?: Date;
    status?: ApplicationStatusEnum;
    statusMessage?: string;
    type?: ApplicationTypeEnum;
}
