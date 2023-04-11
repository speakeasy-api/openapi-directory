import { SpeakeasyBase } from "../../../internal/utils";
import { AssistantStatusEnum } from "./assistantstatusenum";
import { AssistantTypeEnum } from "./assistanttypeenum";
import { ServerSideEncryptionConfiguration } from "./serversideencryptionconfiguration";
/**
 * The assistant data.
 */
export declare class AssistantData extends SpeakeasyBase {
    assistantArn: string;
    assistantId: string;
    description?: string;
    name: string;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    status: AssistantStatusEnum;
    tags?: Record<string, string>;
    type: AssistantTypeEnum;
}
