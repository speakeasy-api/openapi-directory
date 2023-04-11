/**
 * The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.
 *
 * @remarks
 *
 */
export declare enum ClosestEnum {
    Either = "either",
    Before = "before",
    After = "after"
}
