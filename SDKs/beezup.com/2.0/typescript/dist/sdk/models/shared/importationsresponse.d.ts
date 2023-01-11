import { SpeakeasyBase } from "../../../internal/utils";
import { ImportationReporting } from "./importationreporting";
import { ImportationsResponseLinks } from "./importationsresponselinks";
export declare class ImportationsResponse extends SpeakeasyBase {
    importations?: ImportationReporting[];
    links?: ImportationsResponseLinks;
}
