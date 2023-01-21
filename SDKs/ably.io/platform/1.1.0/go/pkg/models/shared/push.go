package shared

// PushApns
// Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
type PushApns struct {
	Notification *Notification `json:"notification,omitempty"`
}

// PushFcm
// Extends and overrides generic values when delivering via GCM/FCM. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
type PushFcm struct {
	Notification *Notification `json:"notification,omitempty"`
}

// PushWeb
// Extends and overrides generic values when delivering via web. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
type PushWeb struct {
	Notification *Notification `json:"notification,omitempty"`
}

type Push struct {
	Apns         *PushApns     `json:"apns,omitempty"`
	Data         *string       `json:"data,omitempty"`
	Fcm          *PushFcm      `json:"fcm,omitempty"`
	Notification *Notification `json:"notification,omitempty"`
	Web          *PushWeb      `json:"web,omitempty"`
}
