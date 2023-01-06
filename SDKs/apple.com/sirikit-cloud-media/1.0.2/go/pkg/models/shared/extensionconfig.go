package shared

type ExtensionConfigIntentAddMedia struct {
	Hdr map[string]interface{}
	URL *string
}

type ExtensionConfigIntentPlayMedia struct {
	Hdr map[string]interface{}
	URL *string
}

type ExtensionConfigIntentUpdateMediaAffinity struct {
	Hdr map[string]interface{}
	URL *string
}

type ExtensionConfigIntent struct {
	AddMedia            *ExtensionConfigIntentAddMedia
	Hdr                 map[string]interface{}
	PlayMedia           ExtensionConfigIntentPlayMedia
	UpdateMediaAffinity *ExtensionConfigIntentUpdateMediaAffinity
}

type ExtensionConfigMediaQueuesPlayMedia struct {
	Hdr map[string]interface{}
	URL *string
}

type ExtensionConfigMediaQueuesUpdateActivity struct {
	Hdr map[string]interface{}
	URL *string
}

type ExtensionConfigMediaQueues struct {
	Hdr            map[string]interface{}
	PlayMedia      *ExtensionConfigMediaQueuesPlayMedia
	UpdateActivity *ExtensionConfigMediaQueuesUpdateActivity
}

type ExtensionConfigMedia struct {
	Queues *ExtensionConfigMediaQueues
}

type ExtensionConfig struct {
	Hdr     map[string]interface{}
	Intent  ExtensionConfigIntent
	Media   ExtensionConfigMedia
	URL     *string
	Version string
}
