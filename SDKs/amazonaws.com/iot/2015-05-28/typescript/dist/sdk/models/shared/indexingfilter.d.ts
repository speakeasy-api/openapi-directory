import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides additional filters for specific data sources. Named shadow is the only data source that currently supports and requires a filter. To add named shadows to your fleet indexing configuration, set <code>namedShadowIndexingMode</code> to be <code>ON</code> and specify your shadow names in <code>filter</code>.
 */
export declare class IndexingFilter extends SpeakeasyBase {
    namedShadowNames?: string[];
}
