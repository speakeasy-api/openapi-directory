import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The required attributes for a generation data group data set. A generation data set is one of a collection of successive, historically related, catalogued data sets that together are known as a generation data group (GDG). Use this structure when you want to import a GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation data sets</a>.
 */
export declare class GdgAttributes extends SpeakeasyBase {
    limit?: number;
    rollDisposition?: string;
}
