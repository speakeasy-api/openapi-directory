import { SpeakeasyBase } from "../../../internal/utils";
import { BuildStatusEnum } from "./buildstatusenum";
export declare class ListBuildsInput extends SpeakeasyBase {
    limit?: number;
    nextToken?: string;
    status?: BuildStatusEnum;
}
