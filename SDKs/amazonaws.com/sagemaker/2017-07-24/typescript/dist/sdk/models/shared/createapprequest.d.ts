import { SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
import { Tag } from "./tag";
export declare class CreateAppRequest extends SpeakeasyBase {
    appName: string;
    appType: AppTypeEnum;
    domainId: string;
    resourceSpec?: ResourceSpec;
    spaceName?: string;
    tags?: Tag[];
    userProfileName?: string;
}
