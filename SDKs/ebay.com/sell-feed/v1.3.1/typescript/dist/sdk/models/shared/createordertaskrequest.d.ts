import { SpeakeasyBase } from "../../../internal/utils";
import { OrderFilterCriteria } from "./orderfiltercriteria";
/**
 * The type that defines the fields for the <b> createOrderTask</b> request.
 */
export declare class CreateOrderTaskRequest extends SpeakeasyBase {
    /**
     * The feed type associated with the task. The only presently supported value is <code>LMS_ORDER_REPORT</code>. See <a href="/api-docs/sell/static/feed/lms-feeds-quick-reference.html#merchant-data-reports-download-feed-types" target="_blank">Report download feed types</a> for more information.
     */
    feedType?: string;
    /**
     * The type that defines the fields for the order filters.
     */
    filterCriteria?: OrderFilterCriteria;
    /**
     * The schema version of the LMS OrderReport. For the <code>LMS_ORDER_REPORT</code> feed type, see the <a href="/devzone/merchant-data/CallRef/OrderReport.html#OrderReport">OrderReport</a> reference page to see the present schema version. The <b> schemaVersion</b> value is the version number shown at the top of the <b> OrderReport</b> page. <br /><br /><b>Restriction: </b> This value must be 1113 or higher. The OrderReport schema version is updated about every two weeks. All version numbers are odd numbers (even numbers are skipped). For example, the next release version after '1113' is '1115'.
     */
    schemaVersion?: string;
}
