import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceDefenderIndexingModeEnum } from "./devicedefenderindexingmodeenum";
import { Field } from "./field";
import { IndexingFilter } from "./indexingfilter";
import { NamedShadowIndexingModeEnum } from "./namedshadowindexingmodeenum";
import { ThingConnectivityIndexingModeEnum } from "./thingconnectivityindexingmodeenum";
import { ThingIndexingModeEnum } from "./thingindexingmodeenum";
/**
 * The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>.
 */
export declare class ThingIndexingConfiguration extends SpeakeasyBase {
    customFields?: Field[];
    deviceDefenderIndexingMode?: DeviceDefenderIndexingModeEnum;
    filter?: IndexingFilter;
    managedFields?: Field[];
    namedShadowIndexingMode?: NamedShadowIndexingModeEnum;
    thingConnectivityIndexingMode?: ThingConnectivityIndexingModeEnum;
    thingIndexingMode: ThingIndexingModeEnum;
}
