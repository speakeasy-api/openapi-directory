import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationDefinitionRead } from "./destinationdefinitionread";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { JobStatusEnum } from "./jobstatusenum";
import { SourceDefinitionRead } from "./sourcedefinitionread";
export declare class JobDebugRead extends SpeakeasyBase {
    airbyteVersion: string;
    configId: string;
    configType: JobConfigTypeEnum;
    destinationDefinition: DestinationDefinitionRead;
    id: number;
    sourceDefinition: SourceDefinitionRead;
    status: JobStatusEnum;
}
