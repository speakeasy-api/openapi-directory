package openapisdk.models.shared;



public class DescribeLifecycleHooksAnswer {
    public LifecycleHook[] lifecycleHooks;
    public DescribeLifecycleHooksAnswer withLifecycleHooks(LifecycleHook[] lifecycleHooks) {
        this.lifecycleHooks = lifecycleHooks;
        return this;
    }
}