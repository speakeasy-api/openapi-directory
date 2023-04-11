import { SpeakeasyBase } from "../../../internal/utils";
import { Election } from "./election";
import { OffsetInfo } from "./offsetinfo";
export declare class ElectionPage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: Election[];
}
