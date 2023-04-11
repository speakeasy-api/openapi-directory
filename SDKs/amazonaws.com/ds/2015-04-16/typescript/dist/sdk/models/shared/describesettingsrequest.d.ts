import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConfigurationStatusEnum } from "./directoryconfigurationstatusenum";
export declare class DescribeSettingsRequest extends SpeakeasyBase {
    directoryId: string;
    nextToken?: string;
    status?: DirectoryConfigurationStatusEnum;
}
